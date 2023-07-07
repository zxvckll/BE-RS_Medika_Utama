import AWS from "aws-sdk";

export const getDiskWriteOps = (req, res) => {
  AWS.config.update({ region: "us-east-1" });

  const cloudwatch = new AWS.CloudWatch();

  const params = {
    MetricWidget: JSON.stringify({
      view: "timeSeries",
      stacked: false,
      metrics: [
        [
          {
            expression:
              'SELECT AVG(DiskWriteOps)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "DiskWriteOps",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Disk Write Ops instans EC2 diurutkan berdasarkan tertinggi",
      yAxis: {
        left: {
          label: "Count",
          showUnits: false,
        },
      },
      stat: "Average",
      period: 300,
    }),
  };

  cloudwatch.getMetricWidgetImage(params, (err, data) => {
    if (err) {
      console.log("Error:", err);
      // Tangani kesalahan dan kirim respons yang sesuai
    } else {
      const imageBuffer = data.MetricWidgetImage;
      res.set("Content-Type", "image/png");
      res.end(imageBuffer, "binary");
    }
  });
};
export const getDiskReadOps = (req, res) => {
  AWS.config.update({ region: "us-east-1" });

  const cloudwatch = new AWS.CloudWatch();

  const params = {
    MetricWidget: JSON.stringify({
      view: "timeSeries",
      stacked: false,
      metrics: [
        [
          {
            expression:
              'SELECT AVG(DiskReadBytes)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "DiskReadOps",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Disk Read Ops instans EC2 diurutkan berdasarkan tertinggi",
      yAxis: {
        left: {
          label: "Count",
          showUnits: false,
        },
      },
      stat: "Average",
      period: 300,
    }),
  };

  cloudwatch.getMetricWidgetImage(params, (err, data) => {
    if (err) {
      console.log("Error:", err);
      // Tangani kesalahan dan kirim respons yang sesuai
    } else {
      const imageBuffer = data.MetricWidgetImage;
      res.set("Content-Type", "image/png");
      res.end(imageBuffer, "binary");
    }
  });
};
export const getDiskReadBytes = (req, res) => {
  AWS.config.update({ region: "us-east-1" });

  const cloudwatch = new AWS.CloudWatch();

  const params = {
    MetricWidget: JSON.stringify({
      view: "timeSeries",
      stacked: false,
      metrics: [
        [
          {
            expression:
              'SELECT AVG(DiskReadBytes)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "${LABEL} [avg: ${AVG} bytes]",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Disk Read Bytes instans EC2 diurutkan berdasarkan tertinggi",
      yAxis: {
        left: {
          label: "Bytes",
          showUnits: false,
        },
      },
      stat: "Average",
      period: 300,
    }),
  };

  cloudwatch.getMetricWidgetImage(params, (err, data) => {
    if (err) {
      console.log("Error:", err);
      // Tangani kesalahan dan kirim respons yang sesuai
    } else {
      const imageBuffer = data.MetricWidgetImage;
      res.set("Content-Type", "image/png");
      res.end(imageBuffer, "binary");
    }
  });
};
export const getDiskWriteBytes = (req, res) => {
  AWS.config.update({ region: "us-east-1" });

  const cloudwatch = new AWS.CloudWatch();

  const params = {
    MetricWidget: JSON.stringify({
      view: "timeSeries",
      stacked: false,
      metrics: [
        [
          {
            expression:
              'SELECT AVG(DiskWriteBytes)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "DiskWriteBytes",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Disk Write Bytes instans EC2 diurutkan berdasarkan tertinggi",
      yAxis: {
        left: {
          label: "Bytes",
          showUnits: false,
        },
      },
      stat: "Average",
      period: 300,
    }),
  };

  cloudwatch.getMetricWidgetImage(params, (err, data) => {
    if (err) {
      console.log("Error:", err);
      // Tangani kesalahan dan kirim respons yang sesuai
    } else {
      const imageBuffer = data.MetricWidgetImage;
      res.set("Content-Type", "image/png");
      res.end(imageBuffer, "binary");
    }
  });
};
