import React, {Component, Fragment} from 'react';
// import Grid from "./components/Grid";
import './App.css';
import Index from "./components";
import Index2 from "./components/index2";

// import Renderer from './Component/Grid/Renderer';

// export default (new class {
//     constructor() {
//         this.renderers = {};
//     }
//
//     get(name) {
//         return this.renderers[name];
//     }
//
//     define(name, callback) {
//         this.renderers[name] = callback;
//     }
// })();

// Renderer.define('grid.renderer.date', date => {});

class App extends Component {
    render() {

        const data = [
            {
                "id": 384,
                "consumerid": "atarasov",
                "productid": "d850f736-fcae-4725-8865-56ccaf9756c0",
                "productname": "F5 BIG-IP VIRTUAL EDITION FOR VMC ON AWS",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/plugin-test/1551096533525_big-ip-virtual-edition-for-vmware-cloud-on-aws-12-x__1506524037340.png",
                "publisherid": "skreytor",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1555668674,
                "sddcid": "ab059528-0baa-4027-a8be-db822c84000d",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1555668662,
                "vmname": "6f7b7991-628b-11e9-b938-bfeee0dd5aa6",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 370,
                "consumerid": "tshakun",
                "productid": "a9f0be14-f13d-4118-8199-ce7be18a857b",
                "productname": "TestNewProductAsync2",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/plugin-test/product-logo-placeholder.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554461586,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554461581,
                "vmname": "fb64b8a1-5790-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 363,
                "consumerid": "tshakun",
                "productid": "54153591-d4dd-4ded-9296-1353950ba186",
                "productname": "TestFixProductAsync",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/plugin-test/product-logo-placeholder.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554456162,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554456158,
                "vmname": "5abbfdc1-5784-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 359,
                "consumerid": "tshakun",
                "productid": "b9f3e165-b023-41bb-8eb6-fd25d4b84e5f",
                "productname": "TestFixProduct1",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/media-files/1554452656314_images.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554454516,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554454515,
                "vmname": "876bcc51-5780-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 358,
                "consumerid": "tshakun",
                "productid": "bfbee067-2ee6-46f9-92ff-d40cb9afce1c",
                "productname": "UNITYVSA CLOUD EDITION",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/plugin-test/1551105512413_unity-cloud-edition-1-0__1534430403326.png",
                "publisherid": "skreytor",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554454329,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554454326,
                "vmname": "16e2e630-5780-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 357,
                "consumerid": "tshakun",
                "productid": "521d33d1-3f3d-4fb8-86a6-39c000d5ef86",
                "productname": "TestProductFix2",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/plugin-test/product-logo-placeholder.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554454150,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554454146,
                "vmname": "ab860161-577f-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 356,
                "consumerid": "tshakun",
                "productid": "b9f3e165-b023-41bb-8eb6-fd25d4b84e5f",
                "productname": "TestFixProduct1",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/media-files/1554452656314_images.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554454079,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554454078,
                "vmname": "82f49181-577f-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            },
            {
                "id": 353,
                "consumerid": "tshakun",
                "productid": "b9f3e165-b023-41bb-8eb6-fd25d4b84e5f",
                "productname": "TestFixProduct1",
                "productlogo": "https://cspmarketplace.s3.us-east-2.amazonaws.com/media-files/1554452656314_images.png",
                "publisherid": "tshakun",
                "publishername": " ",
                "deploymentstatus": "SUBSCRIBED",
                "deployedon": 1554453229,
                "sddcid": "65212b92-8f07-466b-bc01-4d15e48fa806",
                "folderid": "",
                "resourcepoolid": "",
                "datastoreid": "datastore-55",
                "powerstatus": "",
                "poweredon": 0,
                "poweron": false,
                "startedon": 1554453224,
                "vmname": "8663b280-577d-11e9-9415-d52bf956704b",
                "sourceorgid": "691fd5ea-44ff-4086-84dd-2ab199d8df9e",
                "targetorgid": "ae1105ad-493b-443e-9f63-138e1e784551"
            }
        ];

        function formatTime(value) {
            if (value && value !== "") {
                const date = new Date(value * 1000);
                const monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];
                return `${monthNames[date.getMonth() - 1]} ${date.getDay()} ${date.getFullYear()}`
            }
        }

        const titleReplacement = {
            expandable: [
                {
                    dataPath: "productid",
                    renderer: (index, value = "no data") => {
                        return (
                            value
                        )
                    }
                },
                {
                    dataPath: "poweron",
                    renderer: (index, value = "no data") => {
                        return (
                            value.toString()
                        )
                    }
                },
                {
                    dataPath: "vmname",
                    renderer: (index, value = "no data") => {
                        return (
                            value
                        )
                    }
                },
                {
                    dataPath: "deployedon",
                    renderer: (index, value = "no data") => {
                        return (
                            formatTime(value)
                        )
                    }
                },
            ],
            columns: [
                {
                    label: "Logo",
                    dataPath: "productlogo",
                    className: "logo",
                    renderer: (value, data, column) => {
                        return (<img className={column.className} src={value} alt="logo"/>);
                    },
                },
                {
                    label: "Organization mane",
                    dataPath: "publisherid"
                },
                {
                    label: "Product mane",
                    dataPath: "productname"
                },
                {
                    label: "Deployed",
                    dataPath: "deployedon",
                    renderer: (value) => formatTime(value)
                },
                {
                    label: "Status",
                    dataPath: "deploymentstatus",
                    subscribed: "subscribed",
                    unsubscribed: "unsubscribed",
                    renderer: (value, data, column) => {
                        if (value && value !== "") {
                            switch (value) {
                                case column.subscribed.toUpperCase():
                                    return <span className={column.subscribed}>{value}</span>;
                                case column.unsubscribed.toUpperCase():
                                    return <span className={column.unsubscribed}>{value}</span>;
                                default:
                                    return column.unsubscribed.toUpperCase()
                            }
                        }
                    }
                }
            ]
        };

        const rowSelection = {
            onChange: selected => {
                console.log(selected);
            }
        };

        const metaData = {
            selectable: {
                onChange: selected => {
                    console.log(selected);
                }
            },
            columns: [
                {
                    label: "Logo",
                    dataPath: "productlogo",
                    className: "logo",
                    renderer: (value, data, column) => {
                        return (
                            <img className={column.className} src={value} alt="logo"/>
                        );
                    },
                },
                {
                    label: "Organization mane",
                    dataPath: "publisherid"
                },
                {
                    label: "Product mane",
                    dataPath: "productname"
                },
                {
                    label: "Deployed",
                    dataPath: "deployedon",
                    renderer: (value) => {
                        if (value && value !== "") {
                            const date = new Date(value * 1000);
                            const monthNames = [
                                "January", "February", "March",
                                "April", "May", "June", "July",
                                "August", "September", "October",
                                "November", "December"
                            ];
                            return `${monthNames[date.getMonth() - 1]} ${date.getDay()} ${date.getFullYear()}`
                        }
                    }
                },
                {
                    label: "Status",
                    dataPath: "deploymentstatus",
                    subscribed: "subscribed",
                    unsubscribed: "unsubscribed",
                    renderer: (value, data, column) => {
                        if (value && value !== "") {
                            switch (value) {
                                case column.subscribed.toUpperCase():
                                    return <span className={column.subscribed}>{value}</span>;
                                case column.unsubscribed.toUpperCase():
                                    return <span className={column.unsubscribed}>{value}</span>;
                                default:
                                    return column.unsubscribed.toUpperCase()
                            }
                        }
                    }
                }
            ]
        };

        const expandable = [
            {
                index: 0, description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                classExpand: "expandable"
            },
            {
                index: 1, description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
                classExpand: "expandable"
            },
            {
                index: 2, description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                classExpand: "expandable"
            },
        ];

        return (
            <div>
                <Index expandable={expandable} selectable={rowSelection} data={data} titles={titleReplacement}/>
                <Index2 metaData={metaData} data={data}/>
            </div>
        );
    }
}

export default App;
