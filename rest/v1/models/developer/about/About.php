<?php


class About
{
    public $about_aid;
    public $about_img;
    public $about_description_a;
    public $about_description_b;
    public $about_description_c;
    public $about_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblAbout;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAbout = "dcchv1_about";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAbout} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAbout}";
            $sql .= "(about_img, ";
            $sql .= "about_description_a, ";
            $sql .= "about_description_b, ";
            $sql .= "about_description_c, ";
            $sql .= "about_datetime ) values ( ";
            $sql .= ":about_img, ";
            $sql .= ":about_description_a, ";
            $sql .= ":about_description_b, ";
            $sql .= ":about_description_c, ";
            $sql .= ":about_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_img" => $this->about_img,
                "about_description_a" => $this->about_description_a,
                "about_description_b" => $this->about_description_b,
                "about_description_c" => $this->about_description_c,
                "about_datetime" => $this->about_datetime,
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
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_img = :about_img, ";
            $sql .= "about_description_a = :about_description_a, ";
            $sql .= "about_description_b = :about_description_b, ";
            $sql .= "about_description_c = :about_description_c, ";
            $sql .= "about_datetime = :about_datetime ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_img" => $this->about_img,
                "about_description_a" => $this->about_description_a,
                "about_description_b" => $this->about_description_b,
                "about_description_c" => $this->about_description_c,
                "about_datetime" => $this->about_datetime,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
