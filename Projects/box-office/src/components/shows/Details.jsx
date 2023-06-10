const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Premired {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
