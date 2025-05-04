import Input from "./Input";

export default function InputGroup() {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input title="Initial Investment" defaultValue="1000" id="initInvest" />
        <Input title="Annual Investment" defaultValue="900" id="annualInvest" />
      </div>
      <div className="input-group">
        <Input title="Expected Return" defaultValue="5.5" id="expectReturn" />
        <Input title="Duration" defaultValue="12" id="duration" />
      </div>
    </section>
  );
}
