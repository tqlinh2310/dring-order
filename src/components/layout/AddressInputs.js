export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>SDT</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="số điện thoại"
        value={phone || ""}
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
      />
      <label>Địa Chỉ</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="địa chỉ"
        value={streetAddress || ""}
        onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        {/* <div>
          <label>Postal code</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Postal code"
            value={postalCode || ""}
            onChange={(ev) => setAddressProp("postalCode", ev.target.value)}
          />
        </div> */}
        <div>
          <label>Thành Phố</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Thành phố"
            value={city || ""}
            onChange={(ev) => setAddressProp("city", ev.target.value)}
          />
        </div>
      </div>
      {/* <label>Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country || ""}
        onChange={(ev) => setAddressProp("country", ev.target.value)}
      /> */}
    </>
  );
}
