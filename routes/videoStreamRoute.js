const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/stream/:video", (req, res) => {

    const videoPath = path.join(__dirname, "../uploads/course", req.params.video);
    console.log(videoPath);

    if (!fs.existsSync(videoPath)) {
        return res.status(404).send("Video not found");
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    console.log("Video size:", fileSize);

    const range = req.headers.range;
    if (!range) {
        return res.status(400).send("Requires Range header");
    }

   
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);

    const CHUNK_SIZE = 1 * 1024 * 1024; 
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    console.log("Sending bytes:", start, "-", end);

    res.writeHead(206, headers);

    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
});

module.exports = router;