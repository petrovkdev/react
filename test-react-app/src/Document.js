import React, { Component } from 'react';
import './App.css';
import docData from './data.json';
import lang from './lang.json';
import LocalizedStrings from 'react-localization';

class Document extends Component {

  constructor(props) {
    super(props);

    const strings = new LocalizedStrings(lang);
    strings.setLanguage('ru');

    this.text = strings;

    this.document = docData.document.map(function(doc) {

    	if(parseInt(doc.id, 0) === parseInt(props.params.docId, 0)) {

    		return (<table className="table table-bordered" key={doc.id}>
	          <tbody>
	          	<tr>
                	<th className="th">{strings.docName}</th>
                	<td>{doc.displayName}</td>                
              	</tr>
	          	<tr>
                	<th>{strings.docDesc}</th>
                	<td>{doc.description}</td>                
              	</tr>
              	<tr>
                	<th>{strings.docDate}</th>
                	<td>{new Date(doc.docDate).toLocaleDateString()}</td>                
              	</tr>
	          </tbody>
	        </table>);

    	} else {
    		return false;
    	}

    });

  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading clearfix">{this.text.titlePanelListDocument}
        	<a href={'/'} className="btn btn-primary pull-right">
        	<span className="glyphicon glyphicon-arrow-left"></span> {this.text.back}</a>
        </div>
        {this.document}
      </div>
    );
  }
}

export default Document;