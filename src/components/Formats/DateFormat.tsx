import DisplayField from "../DisplayField"
import moment from "moment"

const DateFormat = () => {
    return (
        <DisplayField label={'Day Month'} value={moment.utc(new Date()).local().format('LLL')} />
    )
}

export default DateFormat;