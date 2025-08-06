import { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    // Redirect to SuperProfile course
    window.location.href = 'https://superprofile.bio/course/aryancosmo9';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-lg">Redirecting to course...</p>
      </div>
    </div>
  );
};

export default Login;