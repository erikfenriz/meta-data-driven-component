import React, {Component, Fragment} from 'react';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected || [],
            expanded: props.expanded || []
        };
    }

    checkboxHandler = (e) => {
        const index = Number(e.target.dataset.index);
        const {selected} = this.state;

        if (this.state.selected.some(item => item === index)) {
            return this.setState(
                {selected: selected.filter(item => item !== index).sort((a, b) => a - b)},
                this.dispatcher);
        }

        return this.setState(
            {selected: selected.concat(index).sort((a, b) => a - b)},
            this.dispatcher
        );
    };

    dispatcher = () => {
        const {selectable} = this.props;
        if (selectable.onChange) {
            selectable.onChange(this.state.selected.map(item => {
                return this.props.data[item]
            }));
        }
    };

    selectAll = () => {
        let indexes = [];

        this.props.data.map((_, index) => {
            indexes.push(index)
        });
        this.setState({
            selected: this.state.selected.length !== indexes.length ? indexes : []
        }, this.dispatcher);
    };

    expander = (index) => {
        const expandStatus = this.props.expandable[index] ? this.props.expandable[index].classExpand : "expandable";
        if (this.state.expanded.some(item => item === index)) {
            return (<td key={index}>
            <span onClick={this.doExpand}
                  data-expander={index}
                  data-status={expandStatus}
                  className={expandStatus}>&#x2212;
            </span>
            </td>)
        } else {
            return (<td key={index}>
            <span onClick={this.doExpand}
                  data-expander={index}
                  data-status={expandStatus}
                  className={expandStatus}>&#x2b;
            </span>
            </td>)
        }
    };

    doExpand = (e) => {
        const index = Number(e.target.dataset.expander);
        if (this.state.expanded.some(item => item === index)) {
            return this.setState({expanded: this.state.expanded.filter(item => item !== index).sort((a, b) => a - b)})
        }
        return this.setState(
            {expanded: this.state.expanded.concat(index).sort((a, b) => a - b)}
        );
    };

    render() {
        return (
            <main>
                <table>
                    <thead>
                    <tr>
                        {
                            this.props.expandable ?
                                <td><span></span></td> : null
                        }

                        {
                            this.props.selectable ?
                                <td><input onChange={this.selectAll} type="checkbox"/>
                                </td> : null
                        }

                        {
                            this.props.titles.columns.map((data, index) => {
                                return <td key={index}>{data.label}</td>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map((item, index) => (
                            <Fragment>
                                <tr key={index}>
                                    {
                                        this.props.titles.expandable ? this.expander(index) : null
                                    }

                                    {
                                        this.props.selectable ?
                                            <td><input data-index={index}
                                                       checked={this.state.selected.some(item => item === index)}
                                                       onChange={this.checkboxHandler} type="checkbox"/>
                                            </td> : null
                                    }

                                    {
                                        this.props.titles.columns.map((column, key) => {
                                            const value = item[column.dataPath];

                                            if (column.renderer) {
                                                return (
                                                    <td key={key}>
                                                        {column.renderer(value, item, column)}
                                                    </td>
                                                );
                                            }
                                            return <td key={key}>
                                                {item[column.dataPath]}
                                            </td>
                                        })
                                    }
                                </tr>
                                {this.state.expanded.some(item => item === index) ?
                                    <tr>
                                        <td className="filler"></td>
                                        <td className="filler"></td>
                                        {
                                            this.props.titles.expandable ?
                                                this.props.titles.expandable.map((expandable, key) => {
                                                    return (this.state.expanded.some(item => item === index) ?
                                                        <td>
                                                            {expandable.renderer(index, item[expandable.dataPath])}
                                                        </td>
                                                        : null)

                                                }) : null
                                        }
                                        <td className="filler"></td>
                                    </tr> : null
                                }
                            </Fragment>
                        ))
                    }
                    </tbody>
                </table>
            </main>
        )
    }
};