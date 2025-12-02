function withAuth(Component) {
  const isAuthenticated = true;
  return function WrappedComponent(props) {
    console.log(props);
    return isAuthenticated ? (
      <Component {...props} isAuthenticated={isAuthenticated} />
    ) : (
      <p>Authentication failed</p>
    );
  };
}

const HigherOrderComponent = (props) => {
  return <div>{props?.isAuthenticated ? "Authenticated" : ""}</div>;
};

const ProtectedComponent = withAuth(HigherOrderComponent);

export default ProtectedComponent;
