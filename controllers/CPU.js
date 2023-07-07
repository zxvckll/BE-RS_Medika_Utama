import AWS from "aws-sdk";

export const getCPUUtilization = (req, res) => {
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
              'SELECT AVG(CPUUtilization)\nFROM SCHEMA("AWS/EC2", InstanceId)\nGROUP BY InstanceId\nORDER BY AVG() DESC',
            label: "${LABEL} [avg: ${AVG}%]",
            id: "q1",
            region: "us-east-1",
          },
        ],
      ],
      region: "us-east-1",
      title: "Penggunaan CPU instans EC2 diurutkan berdasarkan tertinggi",
      yAxis: {
        left: {
          label: "Percent",
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
