var data_2 = [
  {id: 1, author: "Pete Hunt2", text: "This is one comment"},
  {id: 2, author: "Jordan Walke2", text: "This is *another* comment"}
];
var CommentBox = React.createClass({
  getInitialState: function(){
    return {data:[]};
  },
  componentDidMount:function(){
    this.setState({data:data_2});
  },

  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>);
    // return React.createElement('div', {className: 'commentBox'}, "hello world,");
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('container'));
