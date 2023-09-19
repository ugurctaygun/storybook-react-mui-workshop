import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import DisplayField from "../DisplayField";

const TagCard = ({title = 'Purchase Order' , options = [{name: 'Company Name' , value: 'Arcelik'},{name: 'Company Code' , value: '046'}]}) => {
    return(
        <Grid container>
            <Card  style={{width: '100%'}}>
                <CardHeader title='Information Card' />
                <CardContent style={{display:'grid' , gridTemplateColumns: '1fr 1fr'}}>
                    {options.map((item,index) => (
                        <DisplayField key={index} label={item.name} value={item.value} />
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default TagCard;