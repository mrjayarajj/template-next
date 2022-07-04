import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import RestClient from '../components/utils/RestClient';
import { useState } from "react";
import { Alert, Container, Row , Col} from 'react-bootstrap';

const Home = (props) => {

    const [zipCode, setZipCode] = useState<string>();
    const [resp, setResp] = useState();
    const [err, setErr] = useState<{}>();

    const submitForm = () => {

        if(zipCode==undefined || zipCode.length==0){
            setErr("please enter a zip code");
            setResp(undefined);
            return;
        }        

        var reqObj = {
            url: 'https://api.zippopotam.us/us/'+zipCode
        }

        return RestClient.get(reqObj)
            .then(resp => {
                setResp(resp.data);
                setErr(undefined);
            })
            .catch(err => {
                setResp(undefined);
                setErr(err);
            });
    }

    return (
        <div>   
            <Head>
                <title>Address App</title>
          </Head>  
            <Container>

                <Row>
                    <Col>
                        Address Module
                    </Col>
                </Row>

                <Row>
                <Col>
                    <input
                        type="text"
                        name="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />                
                    <input 
                        type="button" 
                        onClick={submitForm} 
                        value="get zip code details"
                    />
                </Col>
                </Row>

                <pre id="response_json">{JSON.stringify(resp, undefined, 2)}</pre>
                
                {err ? 
                <Alert key={"warning"} variant={"warning"}>
                    {JSON.stringify(err)}
                </Alert>
                : ''}
            </Container>
        </div>
    )
}

export default Home;
