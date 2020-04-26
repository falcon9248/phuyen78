require("dotenv").config();
export const VerifyToken = process.env.verify_token || "ahihi";
export const PageToken = process.env.page_token || "";
export const MongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/MessengerStranger";
export const MongoDbName =
  process.env.MONGODB_DBNAME || require("parse-mongo-url")(MongoUri).name;
export const Timeout = 300 * 10e2;
import { Text } from "./Chat/response";

export const Messenges = {
  Timeout: Text("hết năm phút rầu"),
  Help: Text(
    'Hãy nhắn 1 kí tự nào đó để bắt đầu và kết thúc lại bằng "pp" nhang'
  ),
  Paired: Text(
    "2 bạng đã được ghép đôi với nhau. Nói dì với ngừ ta đi kìa"
  ),
  Request: {
    Send: Text(
      "Đang tìm kiếm. Dui lòng chờ một chút đở tui tìm cho bạng 1 ngừ tâm sự phù hợp nhang. !!"
    ),
    Sent: Text(
      "Đang tìm nè...Dì hấu dữ"
    )
  },
  Test: {
    Test1: Text("test1"),
    Test2: Text("test2"),
    Test3: Text("test3")
  },
  End: {
    Pair: Text(
      "Không tìm thấy ngừ phù hợp. Nói dì để bắt đầu lại nhang"
    ),
    Chat: {
      Active: Text("Bạng đã dừng cuộc trò chuyện"),
      Passive: Text("Ngừ ấy đã chạy mất dép")
    }
  },
  ChangeFav: {
    SuccessMessage: Text("Bạn đã đổi sở thích thành công. Hãy thử ngay nhé"),
    Male: "Nam",
    Famale: "Nữ",
    Any: "Ai cũng được",
    Ask: "Hãy lựa chọn giới tính của người bạn tiếp theo nhé"
  }
};
