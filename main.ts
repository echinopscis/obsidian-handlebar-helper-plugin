import { Plugin } from 'obsidian';
import {compile} from 'handlebars';

export default class HandlebarHelperPlugin extends Plugin {

  public compileAndRender(t:String,d:Object): String {
    let template = compile(t);
    return template(d);
  }

}