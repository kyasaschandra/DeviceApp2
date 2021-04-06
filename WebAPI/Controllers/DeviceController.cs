using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class DeviceController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select * from dbo.Devices";
            DataTable table = new DataTable();
            using(var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["DeviceDetailsDB"].ConnectionString))
                using(var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                    {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(DeviceDetails device)
        {
            try
            {
                string query = @"insert into dbo.Devices values(
                                                                
                                                                '" + device.Name + @"'
                                                                ,'" + device.OsType + @"'
                                                                ," + device.Battery + @"
                                                                ,'" + device.Memory + @"'
                                                                )
                                                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["DeviceDetailsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }


        }

        public string Put(DeviceDetails device)
        {
            try
            {
                string query = @"update dbo.Devices set
                                 Name='" + device.Name + @"'
                                 ,OsType='" + device.OsType + @"'
                                 ,Battery=" + device.Battery + @"
                                 ,Memory='" + device.Memory + @"'
                                 where Id = "+device.Id+@"
                                                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["DeviceDetailsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }


        }

        public string Delete(int id)
        {
            try
            {
                string query = @"delete from dbo.Devices
                                 where Id = " + id + @"
                                                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["DeviceDetailsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to Delete";
            }


        }
    }
}
