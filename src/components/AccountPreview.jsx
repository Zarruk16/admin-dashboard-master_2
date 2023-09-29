import { getImageUrl } from "../utils/func";

function AccountPreview({ user }) {
  return (
    <div className="user-preview flex align-center">
      <img
        crossOrigin="anonymous"
        src={
          user.profileImage
            ? getImageUrl(user.profileImage)
            : "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg?w=768"
        }
        alt={user.firstName}
      />
      <span className="f400 q t-default">
        {user.firstName} {user.lastName}
      </span>
    </div>
  );
}

export default AccountPreview;
