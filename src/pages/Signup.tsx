import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to SuperProfile course in new tab and go back to home
    window.open('https://superprofile.bio/course/aryancosmo9', '_blank');
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-lg">Opening course...</p>
      </div>
    </div>
  );
};

export default Signup;