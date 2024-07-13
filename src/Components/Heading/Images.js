export default function Images({ image }) {
  return (
    <>
      <img
        src={image}
        alt="island-image-part-one"
        height="600rem"
        width="600rem"
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </>
  );
}
