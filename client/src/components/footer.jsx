import { useNavigate, useLocation } from "react-router-dom";
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPlaylist = location.pathname === "/playlist";

  const handleClick = () => {
    navigate(isPlaylist ? "/" : "/playlist");
  };

  return (
    <footer>
        <div className="logo-footer">
            <Fab color="primary" aria-label="navigate" onClick={handleClick}>
            <ArrowForwardIosIcon />
      </Fab>
        </div>
    </footer>
  );
};

export default Footer;
