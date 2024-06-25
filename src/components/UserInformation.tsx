interface props {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export default function UserInformation({first_name, last_name, email, phone_number}: props) {

  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={first_name}
        required
        readOnly
        disabled
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={last_name}
        required
        readOnly
        disabled
      />

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        required
        readOnly
        disabled
      />

      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone_number}
        required
        readOnly
        disabled
      />
    </form>
  );
}
