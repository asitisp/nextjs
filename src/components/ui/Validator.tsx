export function Validator() {
    return (
        <div className="indicator">
            <span className="indicator-item badge badge-secondary">New</span>
            <button className="btn btn-primary">Notifications</button>
        </div>
    );
}
export function Validator2() {
    return (
        <div>
        <input type="password" className="input validator" required placeholder="Password"  
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p className="validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
</div>
    );
}