import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function EditProfileDialog(props) {
  const userInfo = props.userInfo;
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
      oncomplete: function () {},
    }).open();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">내 정보 수정</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>내 정보 수정</DialogTitle>
        </DialogHeader>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                id="nickname"
                name="nickname"
                defaultValue={userInfo.nickname}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="roadAddress">도로명 주소</Label>
              <div className="flex gap-2">
                <Input
                  id="roadAddress"
                  name="roadAddress"
                  defaultValue={userInfo.roadAddress}
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
                defaultValue={userInfo.detailAddress}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="zipcode">우편번호</Label>
              <Input
                id="zipcode"
                name="zipcode"
                defaultValue={userInfo.zipcode}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="bio">자기소개</Label>
              <Textarea
                id="bio"
                name="bio"
                defaultValue={userInfo.bio || ""}
                placeholder="자기소개를 입력하세요"
                maxLength={200}
                className="min-h-40"
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="text-black" type="submit">
              수정
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { EditProfileDialog };
