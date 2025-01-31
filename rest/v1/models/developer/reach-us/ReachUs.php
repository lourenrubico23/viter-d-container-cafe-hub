<?php


class ReachUs
{
    public $reach_us_aid;
    public $reach_us_title;
    public $reach_us_address;
    public $reach_us_facebook;
    public $reach_us_instagram;
    public $reach_us_map_link;
    public $reach_us_button;
    public $reach_us_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblReachUs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReachUs = "dcchv1_reach_us";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblReachUs} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblReachUs}";
            $sql .= "(reach_us_title, ";
            $sql .= "reach_us_address, ";
            $sql .= "reach_us_facebook, ";
            $sql .= "reach_us_instagram, ";
            $sql .= "reach_us_map_link, ";
            $sql .= "reach_us_button, ";
            $sql .= "reach_us_datetime ) values ( ";
            $sql .= ":reach_us_title, ";
            $sql .= ":reach_us_address, ";
            $sql .= ":reach_us_facebook, ";
            $sql .= ":reach_us_instagram, ";
            $sql .= ":reach_us_map_link, ";
            $sql .= ":reach_us_button, ";
            $sql .= ":reach_us_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "reach_us_title" => $this->reach_us_title,
                "reach_us_address" => $this->reach_us_address,
                "reach_us_facebook" => $this->reach_us_facebook,
                "reach_us_instagram" => $this->reach_us_instagram,
                "reach_us_map_link" => $this->reach_us_map_link,
                "reach_us_button" => $this->reach_us_button,
                "reach_us_datetime" => $this->reach_us_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function update()
    {
        try {
            $sql = "update {$this->tblReachUs} set ";
            $sql .= "reach_us_title = :reach_us_title, ";
            $sql .= "reach_us_address = :reach_us_address, ";
            $sql .= "reach_us_facebook = :reach_us_facebook, ";
            $sql .= "reach_us_instagram = :reach_us_instagram, ";
            $sql .= "reach_us_map_link = :reach_us_map_link, ";
            $sql .= "reach_us_button = :reach_us_button, ";
            $sql .= "reach_us_datetime = :reach_us_datetime ";
            $sql .= "where reach_us_aid = :reach_us_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "reach_us_title" => $this->reach_us_title,
                "reach_us_address" => $this->reach_us_address,
                "reach_us_facebook" => $this->reach_us_facebook,
                "reach_us_instagram" => $this->reach_us_instagram,
                "reach_us_map_link" => $this->reach_us_map_link,
                "reach_us_button" => $this->reach_us_button,
                "reach_us_datetime" => $this->reach_us_datetime,
                "reach_us_aid" => $this->reach_us_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
