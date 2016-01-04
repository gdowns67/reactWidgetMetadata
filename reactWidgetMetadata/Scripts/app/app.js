var WidgetMetadataItem = React.createClass({
    render: function() {
        return (
            <h2 className="commentAuthor">
              {this.props.item}
            </h2>
      );
    }
});

var MetadataList = React.createClass({
    render: function() {
        var items = this.props.data.map(function(item) {
            return (
              <WidgetMetadataItem key={item.id} item={item.name}>
              </WidgetMetadataItem>
      );
    });
    return (
            <div className="commentList">
                {items}
            </div>
        );
    }
});

var WidgetMetadata = React.createClass({
    loadWidgetData: function() {
        function success(data) {
            this.setState({data: data});
        };
        function error() {
            console.error(this.props.url, status, err.toString());
        };
        var path = '/data/widget.json';
        reactWidget.restService.get(path, success.bind(this), error.bind(this));
    },
    componentDidMount: function() {
        this.loadWidgetData();
    },
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
          <div className="commentBox">
            <h1>Widget Metadata</h1>
            <MetadataList data={this.state.data} />
          </div>
      );
    }
});

ReactDOM.render(
    <WidgetMetadata />,
    document.getElementById('content')
);
