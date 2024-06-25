export default function Notification({ type, message } : {type : string, message: string}) {
    const className = `notification ${type}`;
    return <div className={className}>{message}</div>;
  }