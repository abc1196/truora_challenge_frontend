import Server from "./Server";

export default class Domain {
  id: string = "";
  ssl_grade: string = "";
  previous_ssl_grade: string = "";
  logo: string = "";
  title: string = "";
  servers_changed: boolean = false;
  is_down: boolean = false;
  servers: Server[] = [];
}
