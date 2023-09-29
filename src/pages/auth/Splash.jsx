import AppContext from "../../contexts/AppContext";
import Loader from "../../components/Loader";
import { useContext } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/api/useAuth";

function Splash(props) {
  const { setUser, setIsReady } = useContext(AppContext);
  const { restoreUser } = useAuth();

  useEffect(() => {
    restoreUser((data) => {
      setUser(data);
      setIsReady(true);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Loader className="apploader" loading />
    </div>
  );
}

export default Splash;
