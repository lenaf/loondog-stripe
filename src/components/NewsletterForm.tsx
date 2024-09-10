
import Button from "@/components/common/Button";
import Input from "./common/Input";
import Select from "./common/Select";

export default function NewsletterForm(props: React.HTMLProps<HTMLFormElement>) {
  return (
    <form {...props}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id='first-name'
          label='First Name'
          className="input-primary w-full mb-4"
          placeholder="First Name"
          type='text'
          required
        />
        <Input
          id='last-name'
          label='Last Name'
          className="input-primary w-full mb-4"
          placeholder="Last Name"
          type='text'
          required
        />
      </div>
      <Input
        id='email'
        label='Email'
        className="input-primary w-full mb-4"
        placeholder="name@gmail.com"
        type='email'
        required
      />
      <Select
        id='role'
        label="I am a..."
        className="select-primary w-full mb-4"
        required
      >
        <option value='' selected disabled>Choose an option</option>
        <option>GSA Advisor/School Faculty</option>
        <option>Youth Aged 13-21</option>
        <option>Youth Aged 5-12</option>
        <option>Parent</option>
        <option>Donor</option>
        <option>From a Communinity Organization</option>
      </Select>
      <Button className="btn-primary" type='submit'>Subscribe</Button>
    </form>
  );
}
