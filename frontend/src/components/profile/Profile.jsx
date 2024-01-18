import "./Profile.scss";

const Profile = () => {
  return (
    <ul className="">
      <li>Username </li>
      <ul style={{ display: "none" }}>
        <li>Einstellungen</li>
        <li>Team Hinzufügen</li>
        <li>Abmelden</li>
      </ul>
    </ul>
  );
};

export default Profile;
