export default function StatusMessage({ type, message }) {
  if (!message) return null;

  return (
    <p className={`status ${type}`} role={type === "error" ? "alert" : "status"}>
      {message}
    </p>
  );
}