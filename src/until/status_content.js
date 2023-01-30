import { Typography } from "@mui/material";


export function status_content($content) {


    switch ($content) {
        case 0:
            return <Typography variant="h7" sx={{
                color: "#33CCCC",
                fontWeight: "bold"
            }}>
                Chờ xác nhận
            </Typography>


        case 1:
            return <Typography variant="h7" sx={{
                color: "#00CC99",
                fontWeight: "bold"
            }}>
                Đã xác nhận
            </Typography>


        case 2:
            return <Typography variant="h7" sx={{
                color: "#009900",
                fontWeight: "bold"
            }}>
                Đang Vận Chuyển
            </Typography>

        case 3:
            return <Typography variant="h7" sx={{
                color: "#FF3333",
                fontWeight: "bold"
            }}>
                Thành Công
            </Typography>
        case -1:
            return <Typography variant="h7" sx={{
                color: "#000011",
                fontWeight: "bold"
            }}>
                Bị Hủy
            </Typography>


        default:
            break;
    }
}