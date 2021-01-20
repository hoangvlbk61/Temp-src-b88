import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  CardFooter,
  CardText,
  Input,
  Progress,
} from "reactstrap";
import { Play, Pause } from "react-feather";
import "./style.scss";
class CCV8 extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{ backgroundColor: "#F8F8F8", padding: "16px" }}>
            Gate CCV8
          </CardHeader>
          <CardBody>
            {/* <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText> */}
            <Input type="textarea" name="text" id="exampleText" />
            <div style={{ margin: "16px 0px 0px" }}>
              Delim <Input style={{ width: "60px", display: "inline" }} /> Pause
              when <Input style={{ width: "60px", display: "inline" }} /> live
            </div>
          </CardBody>
          <CardFooter>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <Button
                size="sm"
                color="success"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <Play size={16} /> Play
              </Button>
              <Button
                size="sm"
                color="info"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <Pause size={16} /> Pause
              </Button>
            </div>
            <CardText>
              - If you have a lot of credit card, open more tabs to check.
            </CardText>
            <CardText>
              - Use firefox and fill in the address bar, <b>about:config</b>,
              then fill to box search:{" "}
              <b>network.http.max-persistent-connection-per-server</b>, then
              double click and set: 100
            </CardText>
            <CardText>
              *{" "}
              <b style={{ color: "red" }}>
                This gate is trusted by many people
              </b>
            </CardText>
          </CardFooter>
        </Card>
        <div className="progress-bar-ctm">
          <Progress
            animated
            color="success"
            value="100"
            style={{ height: "16px" }}
          >
            100%
          </Progress>

          <Card>
            <CardBody>
              <p className="bold" > Checked </p>: 1/1 (100%)
              <p className="bold blue"> Live</p>: 0
              <p className="bold red"> Die</p>: 1
              <p className="bold yellow"> UNK</p>: 0
              <p className="bold yellow"> EXP</p>: 0
              <p className="bold yellow"> INV TYPE CCN</p>: 0
              <p className="bold yellow"> CVV2 MISMATCH</p>: 0
            </CardBody>
          </Card>
          <Card>
            <CardHeader style={{ backgroundColor: "#F8F8F8", padding: "16px", paddingBottom: "0px" }}>
            <p className="bold blue"> Live</p>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Card>
          <Card>
            <CardHeader style={{ backgroundColor: "#F8F8F8", padding: "16px", paddingBottom: "0px" }}>
            <p className="bold red"> Die</p>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Card>
          <Card>
            <CardHeader style={{ backgroundColor: "#F8F8F8", padding: "16px", paddingBottom: "0px" }}>
            <p className="bold yellow"> UNK</p>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Card>
          
        </div>
      </div>
    );
  }
}

export default CCV8;
