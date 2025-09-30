import { useState } from "react";
import axios from "@/config/axiosConfig";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

function EditProfileDialog({ userInfo, fetchUserInfo }) {
  const [editData, setEditData] = useState({});
  const [open, setOpen] = useState(false);
  const loadDaumPostcode = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src =
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };
  const handleAddressClick = async () => {
    if (!window.daum) await loadDaumPostcode();
    new window.daum.Postcode({
      oncomplete: function (data) {
        setEditData((prev) => ({
          ...prev,
          roadAddress: data.roadAddress,
          detailAddress: "",
          zipcode: data.zonecode,
        }));
      },
    }).open();
  };

  const handleEdit = async () => {
    try {
      await axios.patch("/users/me", editData);
      console.log("수정 성공");
      setOpen(false);
      fetchUserInfo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (open) {
          setEditData({
            nickname: userInfo.nickname || "",
            roadAddress: userInfo.roadAddress || "",
            detailAddress: userInfo.detailAddress || "",
            zipcode: userInfo.zipcode || "",
            introduce: userInfo.introduce || "",
          });
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">내 정보 수정</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>내 정보 수정</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              value={editData.nickname}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, nickname: e.target.value }))
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="roadAddress">도로명 주소</Label>
            <div className="flex gap-2">
              <Input
                id="roadAddress"
                name="roadAddress"
                value={editData.roadAddress}
                readOnly
              />
              <Button
                type="button"
                className="text-black"
                onClick={handleAddressClick}
              >
                주소 검색
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="detailAddress">상세 주소</Label>
            <Input
              id="detailAddress"
              name="detailAddress"
              value={editData.detailAddress}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  detailAddress: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="zipcode">우편번호</Label>
            <Input
              id="zipcode"
              name="zipcode"
              value={editData.zipcode}
              readOnly
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="bio">자기소개</Label>
            <Textarea
              id="bio"
              name="bio"
              value={editData.introduce || ""}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, introduce: e.target.value }))
              }
              placeholder="자기소개를 입력하세요"
              maxLength={200}
              className="min-h-40"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleEdit} className="text-black">
            수정
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { EditProfileDialog };
