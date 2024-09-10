# Lab3 Skeleton

from pox.core import core

import pox.openflow.libopenflow_01 as of

log = core.getLogger()

class Routing (object):
  """
  A Firewall object is created for each switch that connects.
  A Connection object for that switch is passed to the __init__ function.
  """
  def __init__ (self, connection):
    # Keep track of the connection to the switch so that we can
    # send it messages!
    self.connection = connection

    # This binds our PacketIn event listener
    connection.addListeners(self)

  def do_routing (self, packet, packet_in, port_on_switch, switch_id):
    # port_on_swtich - the port on which this packet was received
    # switch_id - the switch which received this packet
    # Your code here
    #Checking Protocols
    print(switch_id)
    print("-------")
    print(port_on_switch)
    print("-------")
    ip = packet.find('ipv4')
    if ip is not None:
      src = ip.srcip
      if src == None:
        print("No source IP")
      dst = ip.dstip
      if dst == None:
        print("No destination IP")
    else:
      print("No IP header found")
    tcp = packet.find('tcp')
    if tcp == None:
      print("No tcp")
    icmp = packet.find('icmp')
    if icmp == None:
      print("No icmp")
    udp = packet.find('udp')
    if udp == None:
      print("No udp")
    
    #Creating Subnet
    def subnet(IPAddr):
      split_ip = str(IPAddr).split('.')
      subnet = int(split_ip[2])
      if subnet > 4:
        return None
      return subnet
    
    end_port = 0
    
    def accept():
      table = of.ofp_flow_mod()
      table.match = of.ofp_match.from_packet(packet)
      table.idle_timeout = 30
      table.hard_timeout = 30
      table.actions.append(of.ofp_action_output(port = end_port))
      table.buffer_id = packet_in.buffer_id
      self.connection.send(table)
      print("ACCEPTING...")
    def drop():
      table = of.ofp_flow_mod()
      table.match = of.ofp_match.from_packet(packet)
      table.idle_timeout = 30
      table.hard_timeout = 30
      table.buffer_id = packet_in.buffer_id
      self.connection.send(table)
      print("DROPPING....")

    #Assigning end_port
    if switch_id == 4:
      if dst == "200.20.2.8":
        end_port = 48
      elif dst == "200.20.2.10":
        end_port = 41
      elif dst == "200.20.2.9":
        end_port = 49
      elif subnet(dst) != 2:
        end_port = 4
    elif switch_id == 1:
      if dst == "200.20.3.4":
        end_port = 14
      elif dst == "200.20.3.5":
        end_port = 15
      elif subnet(dst) != 3:
        end_port = 5
    elif switch_id == 2:
      if dst == "200.20.4.6":
        end_port = 26
      elif dst == "200.20.4.7":
        end_port = 27
      elif subnet(dst) != 4:
        end_port = 2
    elif switch_id == 3:
      if dst == "200.20.1.1":
        end_port = 31
      elif dst == "200.20.1.2":
        end_port = 32
      elif dst == "200.20.1.3":
        end_port = 33
      elif subnet(dst) != 1:
        end_port = 3
    else:
      print("IN CORE SWITCH")
      if dst == "200.20.2.8" or dst == "200.20.2.9" or dst == "200.20.2.10":
        end_port = 4
        accept()
        return
      elif dst == "200.20.1.1" or dst == "200.20.1.2" or dst == "200.20.1.3":
        end_port = 3
        accept()
        return
      elif dst == "200.20.4.6" or dst == "200.20.4.7":
        end_port = 2
        accept()
        return
      elif dst == "200.20.3.4" or dst == "200.20.3.5":
        end_port = 5
        accept()
        return

    if icmp:
      if switch_id == 1 and subnet(dst) == 3:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 4 and subnet(dst) == 2:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 4 and subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 2:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
    elif tcp:
      if switch_id == 1 and subnet(dst) == 3:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 4 and subnet(dst) == 2:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 1 and subnet(dst) == 4 or subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 3 or subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 3 or subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      else:
        print("tcp didn't work")
    elif udp:
      if switch_id == 1 and subnet(dst) == 3:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 4 and subnet(dst) == 2:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 1 and subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 3:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 2 and subnet(dst) == 1:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()
      elif switch_id == 3 and subnet(dst) == 4:
        print("This is the src_ip: {}, this is its subnet {}. This is the port: {}".format(src, subnet(src), port_on_switch))
        print("This is the dst_ip: {}, this is its subnet {}. This is the port: {}".format(dst, subnet(dst), port_on_switch))
        print("This is the end_port= {}".format(end_port))
        accept()    
    else:
      print("Dropping the packet")
      drop()
      
    

  def _handle_PacketIn (self, event):
    """
    Handles packet in messages from the switch.
    """
    packet = event.parsed # This is the parsed packet data.
    if not packet.parsed:
      log.warning("Ignoring incomplete packet")
      return

    packet_in = event.ofp # The actual ofp_packet_in message.
    self.do_routing(packet, packet_in, event.port, event.dpid)

def launch ():
  """
  Starts the component
  """
  def start_switch (event):
    log.debug("Controlling %s" % (event.connection,))
    Routing(event.connection)
  core.openflow.addListenerByName("ConnectionUp", start_switch)

