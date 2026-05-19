import InBug from "../icons/InBug-White.png";

const ChatButton = () => {
	return (
		<a
			className="chat-button"
			href="https://www.linkedin.com/in/julian-pagcaliwagan/"
		>
			<img className="in-icon" src={InBug} width="11px" height="11px" />
			{"Let's Chat"}
		</a>
	);
};

export default ChatButton;
