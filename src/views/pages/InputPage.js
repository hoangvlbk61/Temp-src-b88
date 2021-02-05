import React, { useCallback, useEffect, useState } from "react";
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

const CCV8 = () => {
  const [data, setData] = useState("");
  const [totalLinks, setTotalLink] = useState(0);
  const [isProcessing, setProcessing] = useState();
  const [result, setResult] = useState([]);
  const triggerCCV8 = () => {
    const links = data.split("\n");
    setTotalLink(links.length);
    const instanceLinks = [];
    links.forEach((lk) => {
      fetch("http://localhost:5000/ccv8", {
        method: "POST",
        body: JSON.stringify({
          data: lk,
        }),
        // mode: "no-cors",
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.sts) {
            instanceLinks.push({
              inputData: res.inputData,
              inputStatus: res.inputStatus,
            });
            setResult([...instanceLinks]);
          }
        });
    });
  };

  const live = result
    .filter((e) => e.inputStatus.toUpperCase() === "LIVE")
    .map((e) => e.inputData);
  const die = result
    .filter((e) => e.inputStatus.toUpperCase() === "DIE")
    .map((e) => e.inputData);
  const unk = result
    .filter((e) => e.inputStatus.toUpperCase() === "UNK")
    .map((e) => e.inputData);

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
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            onChange={(e) => setData(e.target.value)}
          />
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
              onClick={triggerCCV8}
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
            - Use firefox and fill in the address bar, <b>about:config</b>, then
            fill to box search:{" "}
            <b>network.http.max-persistent-connection-per-server</b>, then
            double click and set: 100
          </CardText>
          <CardText>
            *{" "}
            <b style={{ color: "red" }}>This gate is trusted by many people</b>
          </CardText>
        </CardFooter>
      </Card>
      <div className="progress-bar-ctm">
        <Progress
          animated
          color="success"
          value={`${parseFloat(result.length / totalLinks.length) * 100}`}
          style={{ height: "16px" }}
        >
          100%
        </Progress>

        <Card>
          <CardBody>
            <p className="bold"> Checked </p>: {result.length}/
            {totalLinks.length} (
            {parseFloat(result.length / totalLinks.length) * 100}%)
            <p className="bold blue"> Live</p>: {live.length}
            <p className="bold red"> Die</p>: {die.length}
            <p className="bold yellow"> UNK</p>: {unk.length}
            <p className="bold yellow"> EXP</p>: 0
            <p className="bold yellow"> INV TYPE CCN</p>: 0
            <p className="bold yellow"> CVV2 MISMATCH</p>: 0
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#F8F8F8",
              padding: "16px",
              paddingBottom: "0px",
            }}
          >
            <p className="bold blue"> Live</p>
          </CardHeader>
          <CardBody>
            {live.map((e) => (
              <div>{e}</div>
            ))}
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#F8F8F8",
              padding: "16px",
              paddingBottom: "0px",
            }}
          >
            <p className="bold red"> Die</p>
          </CardHeader>
          <CardBody>
            {die.map((e) => (
              <div>{e}</div>
            ))}
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#F8F8F8",
              padding: "16px",
              paddingBottom: "0px",
            }}
          >
            <p className="bold yellow"> UNK</p>
          </CardHeader>
          <CardBody>
            {unk.map((e) => (
              <div>{e}</div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CCV8;
