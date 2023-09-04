import DisplayField from "../DisplayField"
import moment from "moment"

const DateFormat = () => {
    return (
        <DisplayField label={'Detailed Date'} value={moment.utc(new Date()).local().format('LLL')} />
    )
}

export default DateFormat;