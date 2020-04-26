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
  Timeout: Text("hết năm phút rầu. Nhắn ký tự bất kỳ để bắt đầu lại"),
  Help: Text(
    'Hãy nhắn 1 kí tự nào đó để bắt đầu và kết thúc lại bằng "pp" nhang'
  ),
  Paired: Text(
    "Đã tìm thấy. Nói dì với ngừ ta đi kìa"
  ),
  Request: {
    Send: Text(
      "Đang tìm kiếm..."
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
      "Kết thúc tìm kiếm. Nói dì để bắt đầu lại nhang"
    ),
    Chat: {
      Active: Text("Bạng đã dừng cuộc trò chuyện. Nhắn ký tự bất kỳ để tìm lại"),
      Passive: Text("Người ấy đã chạy mất dép. Nhắn ký tự bất kỳ để tìm lại")
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
