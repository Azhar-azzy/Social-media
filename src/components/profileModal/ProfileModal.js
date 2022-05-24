import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ profileModal, setProfileModal }) {
  const theme = useMantineTheme();

  return (
    <Modal
      centered
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={profileModal}
      onClose={() => setProfileModal(false)}
    >
      <form className="info__form">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="info__input"
            name="fname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="info__input"
            name="lname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="info__input"
            name="worksAt"
            placeholder="Works At"
          />
        </div>
        <div>
          <input
            type="text"
            className="info__input"
            name="livesIn"
            placeholder="Lives In"
          />
          <input
            type="text"
            className="info__input"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="info__input"
            name="worksAt"
            placeholder="Relationship Status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" className="info__input__file" name="profileImg" />
          Cover Image
          <input type="file" className="info__input__file" name="coverImg" />
        </div>
        <button className="button info__button">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModal;
