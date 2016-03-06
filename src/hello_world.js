var data_2 = [
  {id: 1, author: "Pete Hunt2", text: "This is one comment"},
  {id: 2, author: "Jordan Walke2", text: "This is *another* comment"}
];
var CommentBox = React.createClass({
  getInitialState: function(){
    return {data:data_2};
  },
  componentDidMount:function(){
    this.setState({data:data_2});
  },
  handleCommentSubmit: function(comment){
    var data = this.state.data;
    comment.id = Date.now();
    data.push(comment);
    this.setState({data:data});
  },

  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>);
    // return React.createElement('div', {className: 'commentBox'}, "hello world,");
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('container'));
