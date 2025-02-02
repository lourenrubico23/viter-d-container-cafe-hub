<?php


class Copyright
{
    public $copyright_aid;
    public $copyright_title;
    public $copyright_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblCopyright;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCopyright = "dcchv1_copyright";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblCopyright} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblCopyright}";
            $sql .= "(copyright_title, ";
            $sql .= "copyright_datetime ) values ( ";
            $sql .= ":copyright_title, ";
            $sql .= ":copyright_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "copyright_title" => $this->copyright_title,
                "copyright_datetime" => $this->copyright_datetime,
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
            $sql = "update {$this->tblCopyright} set ";
            $sql .= "copyright_title = :copyright_title, ";
            $sql .= "copyright_datetime = :copyright_datetime ";
            $sql .= "where copyright_aid = :copyright_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "copyright_title" => $this->copyright_title,
                "copyright_datetime" => $this->copyright_datetime,
                "copyright_aid" => $this->copyright_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
