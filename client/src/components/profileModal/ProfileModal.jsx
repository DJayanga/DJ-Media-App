import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="lg"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="InfoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="InfoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InfoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Works at"
            className="InfoInput"
            name="worksAt"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lives in"
            className="InfoInput"
            name="livesIn"
          />
          <input
            type="text"
            placeholder="Country"
            className="InfoInput"
            name="country"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Relationship Status"
            className="InfoInput"
            name="relationshipStatus"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
