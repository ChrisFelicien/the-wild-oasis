import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSetting from './useSetting';
import Spinner from './../../ui/Spinner';
import useUpdateSetting from './useUpdateSetting';

function UpdateSettingsForm() {
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    isPending,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      BreakFastPrice,
    } = {},
  } = useSetting();

  if (isPending) return <Spinner />;

  const handleBlur = (e, currValue, field) => {
    const { value } = e.target;

    if (!value || Number(currValue) === Number(value)) return;

    updateSetting({ [field]: value });
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          name="minBookingLength"
          onBlur={(e) => handleBlur(e, minBookingLength, 'minBookingLength')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          name="maxBookingLength"
          onBlur={(e) => handleBlur(e, maxBookingLength, 'maxBookingLength')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          name="maxGuestPerBooking"
          onBlur={(e) =>
            handleBlur(e, maxGuestPerBooking, 'maxGuestPerBooking')
          }
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={BreakFastPrice}
          name="BreakFastPrice"
          onBlur={(e) => handleBlur(e, BreakFastPrice, 'BreakFastPrice')}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
