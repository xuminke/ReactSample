var data_1 = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
      );
  }
  });

var CommentForm = React.createClass({
  getInitialState: function(){
    return {author:"", text:""};
  },
  handleAuthorChange: function(e){
    this.setState({author:e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault()
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!author || !text){
      alert("empty!");
      return false;
    }
    console.log(this.state);
    this.setState({author:"", text:""});
  },
  render: function(){
    return (
      // <div className="commentForm">Hello, world! I am a CommentForm.</div>
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}></input>
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}></input>
        <input type="submit" value="POST" />
      </form>
      );
  }
});

var Comment = React.createClass({
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },
  render: function(){
    return (
      <div className="comment">
      <h2 className="commentAuthor">{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/ >
      </div>
      );
  }
});

