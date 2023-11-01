import { Alert,  Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export function MyAlert({
  open,
  setOpen,message
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message:string
}) {
  return (
    <div className="absolute top-[8.5vh] w-full z-20 text-lg">
      <Collapse in={open}>
        <Alert
          className="text-lg flex justify-center items-center"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </div>
  );
}
