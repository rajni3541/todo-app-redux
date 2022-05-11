
import { ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const TodoItem = () => {
    return (
        <>
            <ListItemText
            primary="Todo Name"
            secondary={
                <>
                <Typography
                sx={{display:'inline'}}
                component="span"
                varient="body2"
                color="text.primary"
                >
                    Todo Descripition <DeleteIcon/>
                </Typography>
                </>
            }

            />

              

        </>
    )
}
export default TodoItem 