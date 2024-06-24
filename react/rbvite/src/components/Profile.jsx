import Button from './atoms/Button';

export default function Profile({ name, signOut }) {
  return (
    <>
      <strong className="text-green-500">{name}</strong> logined
      <Button onClic={signOut} text="SignOut" size="xs" />
    </>
  );
}
