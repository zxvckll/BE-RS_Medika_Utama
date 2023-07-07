import AWS from "aws-sdk";

export const getNetworkIn = (req, res) => {
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
              'SELECT AVG(NetworkIn)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "NetworkIn",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Network In instans EC2 diurutkan berdasarkan tertinggi",
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
export const getNetworkOut = (req, res) => {
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
              'SELECT AVG(NetworkOut)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "NetworkOut",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Network Out instans EC2 diurutkan berdasarkan tertinggi",
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
export const getNetworkPacketsOut = (req, res) => {
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
              'SELECT AVG(NetworkPacketsOut)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "NetworkPacketsOut",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Network Packets Out instans EC2 diurutkan berdasarkan tertinggi",
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
export const getNetworkPacketsIn = (req, res) => {
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
              'SELECT AVG(NetworkPacketsIn)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "NetworkPacketsIn",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title:
        "Penggunaan Network Packets In instans EC2 diurutkan berdasarkan tertinggi",
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
