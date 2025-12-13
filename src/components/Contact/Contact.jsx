import css from "./Contact.module.css";
import { UserIcon, PhoneIcon } from "@heroicons/react/24/solid";

function Contact({ name, number }) {
  return (
    <li>
      <div className={css.contactWrapper}>
        <div className={css.contactInfoWrapper}>
          <p className={css.text}>
            <span>
              <UserIcon className={css.userIcon} />
            </span>
            {name}
          </p>
          <p className={css.text}>
            <span>
              <PhoneIcon className={css.phoneIcon} />
            </span>
            {number}
          </p>
        </div>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Contact;
